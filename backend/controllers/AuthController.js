import bcrypt from 'bcrypt';
import User from '../models/UserModel.js';

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Cari pengguna berdasarkan username
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({ message: 'Username not found' });
        }

        // Periksa apakah password cocok
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // Jika username dan password cocok, kirimkan respons berhasil
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
