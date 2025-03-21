import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'

// placing order using COD Method

const placeOrder = async (req, res) => {

    try {
        const {userId, items, amount, address} = req.body
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId, {cartData: {}})
        return res.json({success: true , msg: "Order Placed Successfully"})
    } catch(error) {
        console.log(error);
        return res.json({success: false, msg: error.message})
    }

}


//placing order using Stripe Method

const placeOrderStripe = async (req, res) => {
    
}


//placing order using RazorPay Method

const placeOrderRazorPay = async (req, res) => {
    
}


// All Orders Data for Admin Panel

const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success: true, orders})
    } catch(error) {
        console.log(error);
        return res.json({success: false, msg: error.message})
    }
}


//User Order data for frontend

const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({userId})
        res.json({success: true, orders})
    } catch(error) {
        console.log(error);
        return res.json({success: false, msg: error.message})
    }
}


//update order status for Admin Panel

const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success: true, message: "Status Updated Successfully"})
    } catch(error) {
        console.log(error);
        return res.json({success: false, message: error.message})
    }
}


export { placeOrder, placeOrderStripe, placeOrderRazorPay, allOrders, userOrders, updateStatus }