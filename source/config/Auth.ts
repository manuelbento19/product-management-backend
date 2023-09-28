import process from "node:process"

export = {
    secret: process.env.SECRET_KEY || "8d6787e8d06b59484545d5126a726cba"
}