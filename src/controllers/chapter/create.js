import prisma from "../../../prisma/index.js";

const create = async (req, res) => {

    const action = await prisma.chapter.create({
        data: {
            user: req.body.user,
            title: req.body.title,
            pages: req.body.pages,
            Subject: {
                connect: {
                    id: req.body.subjectId
                }
            }
        }
    });
    res.status(200).send("done");
}

export default create;