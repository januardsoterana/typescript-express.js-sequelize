import { BlobServiceClient } from '@azure/storage-blob';

const AZURE_STORAGE_CONNECTION_STRING =
    process.env.AZURE_STORAGE_CONNECTION_STRING;
if (!AZURE_STORAGE_CONNECTION_STRING) {
    throw Error('Azure Storage Connection string not found');
}
const AZURE_STORAGE_CONTAINER_NAME = process.env.AZURE_STORAGE_CONTAINER_NAME;
if (!AZURE_STORAGE_CONTAINER_NAME) {
    throw Error('Azure Storage Container name not found');
}

export const blobServiceClient = BlobServiceClient.fromConnectionString(
    AZURE_STORAGE_CONNECTION_STRING,
);

export const containerClient = blobServiceClient.getContainerClient(
    AZURE_STORAGE_CONTAINER_NAME,
);

export const file_upload_to_container = async (file, blobName: string) => {
    const blobClient = containerClient.getBlockBlobClient(blobName);
    return await blobClient.uploadData(file);
};
