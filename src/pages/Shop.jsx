import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { NewCollections } from '../components/NewCollections/NewCollections'
import { NewsLetter } from '../components/NewsLetter/NewsLetter'
import { Popular } from '../components/popular/Popular'
import { Offers } from '../components/offers/Offers'

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
