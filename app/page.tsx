"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/share'); // 子页面的路径
  }, []);

  return null;
}
