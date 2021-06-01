import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Fact from './Fact'
import FactForm from './FactForm'

const Facts = (props)=>{
    const [facts, setFacts] = useState([])

    useEffect(()=>{
        console.log('facts component mounted')
        getFacts()
    }, [])

    const renderFacts =()=>{
        if(facts.length == 0) {
            return <p>no facts</p>
        }

        return facts.map( fact => {
            return <Fact key={fact.id} {...fact} />
        })
    }

    const getFacts = async ()=> {
        try{
          let res = await axios.get('/api/facts')
          setFacts(res.data)
        // things we need to figure out
        } catch(err){
            alert('err occured check console')
            console.log(err)
        }
    }
    return (
        <>
          <h1>Facts!</h1>
          <FactForm />
          {renderFacts()}
        </>
    )
}
export default Facts