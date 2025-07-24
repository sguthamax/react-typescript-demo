type StatusProps = {
    status: 'loading' | 'success' | 'error';
}

function Status ({ status }: StatusProps) {
    let message
    switch (status) {
        case 'loading':
            message = 'Loading...'
            break
        case 'success':
            message = 'Data loaded successfully.'
            break
        case 'error':
            message = 'Error loading data.'
            break
    }

    return <div>{message}</div>
}

export default Status

