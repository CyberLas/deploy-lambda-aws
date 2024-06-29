// Libreria for import
import { v4 } from 'uuid'

// Export default de Lambda
export const handler = async() => {
	console.log("...::: START :::...")
	return {
        statusCode: 200,
        response: {
            error: v4()
        },
        body: JSON.stringify('Hello from Lambda!'),
    }
}
