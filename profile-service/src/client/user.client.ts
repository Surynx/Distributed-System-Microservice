import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "node:path";

const protoFileUrl = path.resolve(__dirname,"proto/user.proto");

const protoDef = protoLoader.loadSync(protoFileUrl);
const grpcObj : any = grpc.loadPackageDefinition(protoDef);

const userPackage = grpcObj.user;

export const userClient = new userPackage.UserService(
    "user-service:50050",
    grpc.credentials.createInsecure()
);