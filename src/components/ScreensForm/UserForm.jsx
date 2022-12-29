export const UserForm = ({ data, updateFieldHandler }) => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Place your name" 
                    required 
                    value={data.name || ''}
                    onChange={e => updateFieldHandler('name', e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Place your name" 
                    required 
                    value={data.email || ''}
                    onChange={e => updateFieldHandler('email', e.target.value)}
                />
            </div>
        </div>
    )
}