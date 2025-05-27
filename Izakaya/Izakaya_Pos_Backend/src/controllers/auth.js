const prisma = require('../config/prisma');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'pong321'; 


exports.pinLogin = async (req, res) => {
    const { pin } = req.body;

    if (!pin) {
        return res.status(400).json({ message: 'PIN is required' });
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                pin,
                active: true,
            },
        });

        if (!user) {
            return res.status(401).json({ message: 'Invalid PIN or inactive user' });
        }

        const token = jwt.sign(
            { userId: user.id, role: user.role },
            JWT_SECRET,
            { expiresIn: '8h' } 
        );

        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.id,
                name: user.fullName,
                role: user.role,
            },
        });
    } catch (error) {
        console.error('PIN Login Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.logout = async (req, res) => {
    
    return res.status(200).json({ message: 'Logged out successfully (client should delete token)' });
};
