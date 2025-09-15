import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/config/db"
import UserModel from "@/libs/models/UserModel"
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const userDetails = await req.json();
        console.log("Name:", userDetails.fullname);
        console.log("Email:", userDetails.email);
        console.log("Password:", userDetails.password);
        console.log("Admin:", userDetails.isAdmin);
        
        await connectMongoDB();

        const existingUser = await UserModel.findOne({ email: userDetails.email.toLowerCase() });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(userDetails.password, 10);
        const dbFullname = userDetails.fullname.toLowerCase();
        const dbEmail = userDetails.email.toLowerCase();
        await UserModel.create({ fullname: dbFullname, email: dbEmail, password: hashedPassword, isAdmin: userDetails.isAdmin || false })


        return NextResponse.json({ message: "User Registered" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "An Error occured while registering the user" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const users = await UserModel.find();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching users", error: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(req) {
  try {
    await connectMongoDB();

    // Get user ID from request URL query parameters
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    // Find and delete the user
    const deletedUser = await UserModel.findByIdAndDelete(id);

    // // Inside DELETE method after finding user
    // if (deletedUser.email === session.user.email) {
    //   return NextResponse.json(
    //     { message: "Cannot delete your own account" },
    //     { status: 400 }
    //   );
    // }

    if (!deletedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      {
        message: "Error deleting user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


