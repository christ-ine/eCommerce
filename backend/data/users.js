import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@examle.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'johnn@examle.com',
        password: bcrypt.hashSync('123456', 10)
        
    },
    {
        name: 'Jane Doe',
        email: 'jane@examle.com',
        password: bcrypt.hashSync('123456', 10)
        
    }
]

export default users