FROM node:21

# 设置工作目录
WORKDIR /usr/src/app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 将应用程序代码复制到工作目录
COPY . .

# 暴露应用程序运行的端口
EXPOSE 8000

CMD ["npx", "phecda", "--experimental-vm-modules","index.ts"]
