import { NextResponse } from "next/server";
import { connectToDB } from "@lib/mongodb/mongoose";

export async function GET(){
    try {
        await connectToDB();
        return NextResponse.json({message:"connected succesfully"})
    } catch (error) {
        return NextResponse.json({message:"some error occured"})
    }
}