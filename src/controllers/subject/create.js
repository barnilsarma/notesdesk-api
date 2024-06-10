import prisma from "../../../prisma/index.js";
const create = async (req, res) => {
    try {
        const action = await prisma.subject.create({
            data: {
                user: req.body?.user,
                sub: req.body.sub,
                Library: {
                    connect: {
                        id: req.body.libraryId
                    }
                }
            }
        });
        res.status(200).send("done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default create;