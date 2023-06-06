import { useState } from "react";
import { useForm } from "react-hook-form";

function PlaceList() {
  const { register ,watch, handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <input {...register("toGo")} placeholder="Name of the country" />
        <button>Let's go!</button>
      </form>
    </div>
  );
}

export default PlaceList;
