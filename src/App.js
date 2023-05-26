import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footor from './components/Footor'
import { Home } from './Home'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
import OCards from './OCards'

const App = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='bg-black text-white'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/ocards' element={<OCards />}></Route>
          </Routes>
          <Footor />
        </div>
        <Particles id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            // background: {
            //   color: {
            //     value: "#fff"
            //   }
            // }
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse"
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                repulse: {
                  enable: true,
                  duration: 0.4,
                },
                push: {
                  quantity: 4,
                }
              }
            },
            particles: {
              links: {
                color: "#fff",
                distance: 80,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: { min: 1, max: 2 },
              },
              number: {
                value: 200,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce"
                },
                speed: 2,
              },
              opacity: {
                value: 0.7,
              },
              collisions: {
                enable: true
              }
            }
          }}
        />
      </BrowserRouter>
    </>
  )
}

export default App