export const constants = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UN_AUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICTS: 409,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UN_AVAILABLE: 503,
};
export const errorConstants = {
    MODATORY: "All fields are modatory",
    PERMISSION: "At least one of phone number or email address is required.",
    DELETEMESSAGE: "Deleted Successfully",
    INVALID_PASSWORD: "Invalid Password",
    USED_PASSWORD: "The new password cannot be the same as any of your previous passwords. Please choose a different password.",
    ALREADY_PRESENT: "User already present"
};
export const successMessage = {
    UPDATE_SUCCESFULL: "Updated Succesfully",
    CREATION: "User Created Succesfully"
}
export const errorMessages = {
    200: "Fetched Succesfully",
    201: "Created Succesfully",
    204: "Updated Succesfully",
    301: "Moved Permanently",
    302: "Found",
    304: "Not Modified",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    409: "Conflict",
    410: "Gone",
    422: "Unprocessable Entity",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
};
export const emailRegux = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
export const passwordRegux = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|~-]).{8,}$/;
export const salt = 10;

export const taskConstants = {
    TASK_CREATED_SUCCESSFULLY: "Task created successfully",
    TASK_UPDATED_SUCCESSFULLY: "Task updated successfully",
    TASK_DELETED_SUCCESSFULLY: "Task deleted successfully",
    TASK_FETCHED_SUCCESSFULLY: "Task fetched successfully",
    TASK_FETCHED_ALL_SUCCESSFULLY: "Fetched all tasks successfully",
    TASK_NOT_FOUND: "Task not found",
    TASK_CREATION_FAILED: "Failed to create task",
    TASK_FETCH_FAILED: "Error fetching task",
    TITLE_REQUIRED: "Title is required"
}