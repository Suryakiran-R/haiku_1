import { NextResponse } from "next/server";
import { createOrUpdateUser } from "@lib/actions/user";

export async function GET(){
    try {
        const res = createOrUpdateUser()
        return NextResponse.json({message:"connected succesfully", res})
    } catch (error) {
        return NextResponse.json({message:"some error occured"})
    }
}