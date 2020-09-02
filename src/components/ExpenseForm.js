import React, {useState} from 'react'

const ExpenseForm = ({addExpense}) => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()
        addExpense({name, amount})
        setName('')
        setAmount(0)
    }

    return (
        <div>
            <form style={{padding: "20px"}}>
                Name: <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br />
                Amount: <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} /><br />
                <input type="submit" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default ExpenseForm
