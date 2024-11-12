import User from "@lib/models/User";
import { connectToDB } from "@lib/mongodb/mongoose";

export const createOrUpdateUser = async ( 
    id,
    first_name,
    last_name,
    image_url,
    email_addresses,
    username
    ) => {
        try {
            console.log("Connecting to DB...");
            await connectToDB();
        
            console.log("Finding and updating user...");
            const user = await User.findOneAndUpdate(
              { clerkId: id },
              {
                $set: {
                  firstName: first_name,
                  lastName: last_name,
                  profilePhoto: image_url,
                  email: email_addresses[0].email_address,
                  username: username,
                },
              },
              { upsert: true, new: true } // if user doesn't exist, create a new one
            );
            
            await user.save();
            console.log("User updated:", user);
            return user;
          } catch (error) {
            console.error('error in creatOrupdate',error);
          }
};

export const deleteUser = async (id) => {
    try {
      await connectToDB();
      await User.findOneAndDelete({ clerkId: id });
    } catch (error) {
      console.error(error);
    }
  };