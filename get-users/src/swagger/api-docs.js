/**
 * @openapi
 * /users:
 *   post:
 *     summary: Creates a new user with encrypted email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 example: "admin"
 *               name:
 *                 type: string
 *                 example: "John"
 *               lastname:
 *                 type: string
 *                 example: "Doe"
 *               idcard:
 *                 type: string
 *                 example: "123456789"
 *               formattedDate:
 *                 type: string
 *                 format: date
 *                 example: "1990-01-01"
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "securepassword123"
 *               phone:
 *                 type: string
 *                 example: "+1234567890"
 *               address:
 *                 type: string
 *                 example: "123 Main St, Anytown, USA"
 *     responses:
 *       201:
 *         description: User successfully created
 *       500:
 *         description: Server error
 */