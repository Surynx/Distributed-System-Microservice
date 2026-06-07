import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path"


export default function startGrpcServer ( grpcHandler:any ) {

    const protoFileUrl = path.resolve(__dirname,"proto/auth.proto");

    const protoDef = protoLoader.loadSync(protoFileUrl);
    const grpcObj : any = grpc.loadPackageDefinition(protoDef);

    const authPackage = grpcObj.auth;

    const grpcServer = new grpc.Server();

    grpcServer.addService(authPackage.AuthService.service, {
        GetLoginInfo:grpcHandler.getLoginInfo
    });

    grpcServer.bindAsync("0.0.0.0:50051",grpc.ServerCredentials.createInsecure(),()=>{

        console.log("Grpc server runninng ✅");
    })
}