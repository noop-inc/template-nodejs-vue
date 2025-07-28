import {
  S3Client,
  GetObjectCommand,
  DeleteObjectCommand
} from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'
import { randomUUID } from 'node:crypto'

const S3Endpoint = process.env.S3_ENDPOINT
const S3Bucket = process.env.S3_BUCKET

const s3Client = new S3Client({
  endpoint: S3Endpoint
})

const sendCommand = async command => await s3Client.send(command)

// Get an S3 object matching the provided key, returns object as a buffer
export const getObject = async key => {
  const params = {
    Bucket: S3Bucket,
    Key: key
  }
  const command = new GetObjectCommand(params)
  const { ContentType, Body } = await sendCommand(command)
  return { ContentType, Body }
}

// Uploads file to S3, generates string UUID as key for resulting object
export const uploadObject = async ({ body, mimeType }) => {
  const key = randomUUID()
  const params = {
    Bucket: S3Bucket,
    Key: key,
    Body: body,
    ContentType: mimeType
  }
  const upload = new Upload({
    client: s3Client,
    params
  })
  await upload.done()
  return key
}

// Deletes object matching the provided key
export const deleteObject = async key => {
  const params = {
    Bucket: S3Bucket,
    Key: key
  }
  const command = new DeleteObjectCommand(params)
  const data = await sendCommand(command)
  return data
}
