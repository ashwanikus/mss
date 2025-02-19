import bcrypt from "bcryptjs";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { email, password } = await req.json();

    await dbConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });

    return NextResponse.json({ message: "User registered", user }, { status: 201 });
}
