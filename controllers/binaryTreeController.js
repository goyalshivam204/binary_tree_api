const BinaryTree = require("../Models/binaryTree");

exports.createNodeController = (req,res) => {
    try{
        let value = req.body.value
        const newNode = new BinaryTree({value: value});
        newNode.save();
        res.status(200).json({success: true, message: "created"});
    }catch(err){
        res.status(500).json({success: false, error: err});
    }
}

exports.connectChildController = async (req,res) =>{
    try{
        let node_value = req.body.node_value;
        let left_value = req.body.left_value;
        let right_value = req.body.right_value;
        const node = await BinaryTree.findOne({"value":node_value});
        const left = await BinaryTree.findOne({"value":left_value});
        const right = await BinaryTree.findOne({"value":right_value});
        node.left = left._id;
        node.right = right._id;
        await node.save();
        res.status(200).json({success: true, message: "Connected"});
    }catch(err){
        res.status(err.statusCode || 500).json({sucess: false,error: err.message});
    }
}

exports.bfsController = async (req,res) => {
    const value = req.body.value
    const root = await BinaryTree.findOne({"value": value}).populate('left right');
    const data = []
    const queue = [root];
        while (queue.length > 0) {
            const curr_level = [];
            for(let i = queue.length; i>0;i--){
                const node = queue.shift();
                curr_level.push(node.value);
                if (node.left){
                    await node.populate('left right');
                    queue.push(node.left);
                } 
                if (node.right){
                    await node.populate('left right');
                    queue.push(node.right);
                } 
            }
            data.push(curr_level);
        }
    res.status(200).json({success: true, message: "BFS/Level Order Traversal",data: data});
}
