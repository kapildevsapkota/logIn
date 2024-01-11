import {NextResponse} from "next/server"

export async function POST (req){
    try{
        const{email,name,password}=await req.json();

        console.log("email",email);
        console.log("name",name);
        console.log("password",password);

        return NextResponse.json({message:"User registered."},{status:201});

    }catch(error){
        return NextResponse.json(
            {message:"An error occurred while registering the user."},{status:500}
        )
    }
}