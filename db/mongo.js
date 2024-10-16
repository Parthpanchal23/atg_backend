const HttpError = require("../utils/http-error");
const MongoClient = require("mongodb").MongoClient;

const db_password ='7mq2ljN7EkoxD4qM';
const URL =`mongodb+srv://tech_01:${db_password}@atgback.fqmvh.mongodb.net/?retryWrites=true&w=majority&appName=Atgback`;

const cretePost = async (req,res,next) => {
    const { title, description, status, location, keyword, creator } = req.body;

    const newPost = {
        title, description, status:true
    }

    const client = new MongoClient(URL);

    try {
        await client.connect();
        try {
            const db = await client.db();
            try {
                const result = await db.collection('Posts').insertOne(newPost);
                if(result)
                {
                    return res.status(200).json({message:"Sucessfully created",data:result});
                }
            } catch (error) {
                client.close();
                console.log("Insertion failure",error);
                const err = new HttpError('insertion failure',401);
                return err;
            }
        } catch (error) {
            client.close();
            const err = new HttpError('Connection failure',401);
            return err;
        }
    } catch (error) {
        client.close(); 
        const err = new HttpError('Could not store  data',401);
        return(err);
    }
    client.close();
}

exports.createMPost = cretePost;