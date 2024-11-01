"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchAllCategory } from "@/features/home/homeThunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { Status } from "@/utils/Status";

const CardGame = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { category, status, errorMessage } = useSelector(
    (state: RootState) => state.categoryReducer
  );

  useEffect(() => {
    dispatch(fetchAllCategory());
  }, [dispatch]);

  const imgCart = "/assets/images/img-cart.png";

  if (status === Status.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === Status.FAILED) {
    return <p>{errorMessage}</p>;
  }

  return (
    <section className="px-4 md:px-32 mt-10 pb-16">
      <div className="flex flex-row items-center gap-3">
        <Image src={imgCart} width={25} height={25} alt="cart" />
        <h2 className="text-2xl font-semibold">All Games</h2>
      </div>
      <p className="text-gray-400 mb-5">List of games</p>

      <div className="flex flex-row flex-wrap gap-5">
        {category?.map((item, index) => (
          <div
            key={index}
            className="relative w-[180px] h-[280px] group overflow-hidden rounded-2xl shadow-md transform transition duration-300 ease-in-out hover:shadow-2xl"
          >
            <Link href="/game">
              <div className="relative w-full h-full">
                <Image
                  src={item.ct_image}
                  layout="fill"
                  objectFit="cover"
                  alt={item.ct_name}
                  className="transform transition duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {item.ct_name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">
                    {item.ct_game_publisher}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGame;