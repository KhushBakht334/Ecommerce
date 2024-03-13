import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { NewCollections } from '../components/NewCollections/NewCollections'
import { NewsLetter } from '../components/NewsLetter/NewsLetter'
import { Offers } from '../components/offers/Offers'
import { Popular } from '../components/popular/Popular'

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
