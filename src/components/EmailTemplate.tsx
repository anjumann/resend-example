import React from 'react'

const EmailTemplate = (email: string) => {
    return (
        <div>
            Thanks for joining our little newsletter - {" "}
            {email}
        </div>
    )
}

export default EmailTemplate