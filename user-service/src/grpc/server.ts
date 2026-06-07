import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "node:path";


export default function startGrpcServer ( grpcHandler:any ) {

    const protoFileUrl = path.resolve(__dirname,"proto/user.proto");

    const protoDef = protoLoader.loadSync(protoFileUrl);
    const grpcObj : any = grpc.loadPackageDefinition(protoDef);

    const userPackage = grpcObj.user;

    const grpcServer = new grpc.Server();

    grpcServer.addService(userPackage.UserService.service, {
        GetUserDetail:grpcHandler.getUserDetails
    });

    grpcServer.bindAsync("0.0.0.0:50050",grpc.ServerCredentials.createInsecure(),()=>{

        console.log("Grpc server runninng ✅");
    })
}