import React, { useState } from 'react'
import axios from 'axios';
import WeatherData from './WeatherData'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '..//Css/Form.css'

const SearchCity = () => {
    const [value, setValue] = useState('')
    const [city, setCity] = useState('Get Output here')
    const [tempCondition, setTempCondition] = useState('')
    const [temp, setTemp] = useState(0)

    const fetchData = async () => {
        try {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=b4ba5cab1e7cf8891ffad0bc01bc6888`
            const { data } = await axios.get(url)
            setCity(`${data.name}, ${data.sys.country}`)
            setTemp(data.main.temp)
            setTempCondition(data.weather[0].main)
            setValue('')
        }
        catch (err) {
            setCity(err.message)
            setTemp(0)
            setTempCondition('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) {
            setCity('Enter the city name befor search')
            setTemp(0)
            setTempCondition('')
            setValue('')
            return
        }

        fetchData()
    }

    return (
        <>
            <Form className='form' onSubmit={handleSubmit}>
                <Form.Control
                    type="text"
                    value={value}
                    placeholder="Enter your city"
                    autoComplete='off'
                    onChange={e => setValue(e.target.value)}
                />
                <Button type="submit">Search</Button>
            </Form>
            <WeatherData city={city} tempCondition={tempCondition} temp={temp} />
        </>
    )
}

export default SearchCity