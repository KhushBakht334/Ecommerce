import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { NewCollections } from '../components/NewCollections/NewCollections'
import { NewsLetter } from '../components/NewsLetter/NewsLetter'
import { Offers } from '../components/Offers/Offers'
import { Popular } from '../components/Popular/Popular'

export const Shop = () => {
  return (
    <>
    <Hero/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    <NewsLetter/>
    </>
  )
}
