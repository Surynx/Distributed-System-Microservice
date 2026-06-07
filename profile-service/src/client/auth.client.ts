import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "node:path";

const protoFileUrl = path.resolve(__dirname,"proto/auth.proto");

const protoDef = protoLoader.loadSync(protoFileUrl);
const grpcObj : any = grpc.loadPackageDefinition(protoDef);

const authPackage = grpcObj.auth;

export const authClient = new authPackage.AuthService(
    "auth-service:50051",
    grpc.credentials.createInsecure()
);