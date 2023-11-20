import React from 'react'
import dummyData from './api/CardData'
import FormLayout from './Component/form/FormLayout'
import CardLayout from './Component/card/CardLayout'


const Home = () => {
 
  return (
      <main>
         <section className='wrapper'>
          <FormLayout />    
        </section>
        <section className='card-cover'>
          <div className='wrapper'>
            <div className='card-list'>
              {dummyData.map((card) => (
                <CardLayout 
                  key={card.id}
                  image={card.image} 
                  title={card.title}
                  Name={card.name}
                  Address={card.address}
                  time={card.time}
                  experience={card.experience}
                  salary={card.salary}
                  employees={card.employees}
                  buttonName={card.buttonName}
                  buttonClassName={card.buttonClassName}
                />
              ))}
            </div>
          </div>
        </section>
      </main>      
  )
}

export default Home;