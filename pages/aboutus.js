import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import React, { useState } from "react";
import { Tooltip } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {
  CardMedia,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardHeader
} from "@material-ui/core";
import {HiOutlineMail} from "react-icons/hi";
import {HiPhone} from "react-icons/hi";
import {IoCalendarNumberSharp} from "react-icons/io5";
import {HiChat} from "react-icons/hi";
import Slider from "../components/Slider";
import ReactTooltip from 'react-tooltip';

export default function AboutUs() {
  const router = useRouter()
  const { slug } = router.query
 

  return(
    <Layout>
      <div className="bg-background w-full py-10 px-10">
        <div>
          <div className="sm:flex space-x-7 md:items-start items-center">
            <div className="mb-4">
              <Slider/>
            </div>
            <div className="text-center">
              <h1 className="text-slate-100 text-4xl font-bold my-2 hover:text-adopt-pink">About PetFinder</h1>
              <p className="text-slate-100 text-lg tracking-wide mb-6 md:max-w-lg">
               PetFinder is an online, searchable database of animals who need homes. 
               It is also a directory of nearly 11,000 animal shelters and adoption organizations 
               across the U.S., Canada and Mexico. Petfinder is updated DAILY.
              </p>
              <form action="https://www.petfinder.com/" >
              <ReactTooltip id="tip" textColor='#fe646f'  backgroundColor='#fff' effect="float" place="bottom">
                 Visit petfinder website 
                </ReactTooltip>
              <button
              data-tip data-for="tip"
                type="submit"
                className="transition duration-700 ease-in-out m-auto flex px-6 py-4 hover:bg-hover-pink hover:text-black  items-center bg-background text-adopt-pink hover:bg-pink-hover border-adopt-pink border-2 p-2 rounded-md  text-xl w-auto"
              >
                   
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 m-2 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                PETFINDER.COM
              </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
          <Card className="bg-background  border-adopt-pink">
            <CardHeader
              title="Mail"
              className="margin-auto font-semibold text-center bg-gradient-to-r  from-pink-300 via-adopt-pink to-pink-900 text-black"
            />
            <CardContent className="flex p-2 margin-auto font-semibold content-center text-center border-2 border-adopt-pink bg-background text-white text-lg">
              <div className="w-full p-6 flex flex-col justify-center items-center">
              <HiOutlineMail className="text-adopt-pink" size="3em" />
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2"><br/> pets@petfinder.com </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title="Phone"
              className="margin-auto text-center bg-gradient-to-r from-pink-300 via-adopt-pink to-pink-900 text-black"
            />
            <CardContent
              className="border-2 px-6 py-4  text-center border-adopt-pink
            bg-background text-white text-lg"
            >
              <div className="w-full p-6 flex flex-col justify-center items-center">
              <HiPhone className="text-adopt-pink" size="3em" />
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2">
                  <br/>304 071 240
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader
              title="Since"
              className="margin-auto text-center bg-gradient-to-r from-pink-300 via-adopt-pink to-pink-900 text-black"
            />
            <CardContent
              className="border-2 px-6 py-4  text-center border-adopt-pink
             bg-background text-white text-lg"
            >
              <div className="w-full p-6 flex flex-col justify-center items-center">
              <IoCalendarNumberSharp className="text-adopt-pink" size="3em" />
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2">
                  <br/>
                    1996</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title="Motto"
              className="margin-auto text-center bg-gradient-to-r from-pink-300 via-adopt-pink to-pink-900 text-black"
            />
            <CardContent
              className="border-2 px-6 py-4  text-center border-adopt-pink
             bg-background text-white text-lg"
            >
              <div className="w-full p-6 flex flex-col justify-center items-center">
              <HiChat className="text-adopt-pink" size="3em" />
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2">
                    <br/>
                  Stronger together
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}