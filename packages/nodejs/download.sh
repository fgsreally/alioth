#!/bin/bash

# 使用环境变量配置 minio 客户端
mc config host add myminio $MINIO_URL $MINIO_ACCESS_KEY $MINIO_SECRET_KEY

# 下载并解压缩文件
mc cp myminio/$MINIO_BUCKET/$MINIO_FILE $MINIO_FILE
unzip $MINIO_FILE -d /app
