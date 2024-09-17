"use client";
import { useState, useEffect } from "react";
import { UploadButton } from "@/utils/uploadthing";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Bg from '@/public/bg-daftar.svg';
import Bg2 from '@/public/bg-daftar-2.svg';
import { useToast } from "@/hooks/use-toast";

const UploadImagePage = () => {
  const { toast } = useToast();
  const [imageUrl, setImageUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [data, setData] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const handleImageUpload = (res) => {
    const uploadedFileUrl = res[0].url;
    const uploadedFileName = res[0].name;
    setImageUrl(uploadedFileUrl);
    setFileName(uploadedFileName) // Save the uploaded image URL
    setIsUploading(false)
  };

  const handleBack = () => {
    // Go back to the form page without clearing the data
    router.push('/daftar');
  };

  const handleSubmit = async () => {
    // Retrieve the form data from localStorage
    const formData = JSON.parse(localStorage.getItem("registerData"));
    if (!formData || !imageUrl) {
      toast({
        title:"Please upload an image!",
        description: "Image is not selected",
        variant:"destructive",
      })
      return;
    }

    // Include the uploaded image URL in the data
    const dataToSubmit = { ...formData, image: imageUrl };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (response.ok) {
        console.log("Registration successful");
        // Navigate to success page
        router.push("/daftar/success");
      } else {
        console.error("Error registering:", response.statusText);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  useEffect(() => {
    // Access localStorage only after the component has mounted
    const res = JSON.parse(localStorage.getItem("registerData"));
    if (res) {
      setData(res);
    }
  }, []);

  return (
    <section className='-my-[120px]'>
      <div className='w-full min-h-screen h-full flex flex-col items-center relative py-[120px]'>
        <Image src={Bg2} alt="Background 2" className='absolute right-0 top-0 -z-10 w-[250px] sm:w-[300px] md:w-[400px]' />
        <Image src={Bg} alt="Background" className='absolute left-0 bottom-0 -z-10 w-[400px] sm:w-[500px] md:w-[700px]' />
        {data ? (
            <>
                <h1 className='text-3xl poppins-extrabold md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#678BFF] to-[#9E77FB] text-center drop-shadow-lg'>
                    Pendaftaran Main Event
                </h1>
                <div className='w-[80%] flex flex-col'>
                    <div className="bg-white/30 backdrop-blur-xl w-full p-5 md:p-8 rounded-2xl mt-10 text-white font-medium flex flex-col">
                        <div className="space-y-4 mb-10">
                            <h3 className="font-bold text-2xl md:text-3xl"> Commitment Fee </h3>
                            <p className="text-sm md:text-base"> 
                            Commitment fee bertujuan untuk memastikan keikutsertaan peserta dalam kegiatan di INFEST 2024. 
                            Commitment fee INFEST 2024 berupa Rp. 20.000,- dan akan dikembalikan berupa tunai setelah sesi terakhir 
                            yang diikuti berakhir. 
                            Pembayaran commitment fee dapat dikirimkan melalui:
                            </p>
                            <p className="text-sm md:text-base">
                            BCA Digital 005719016359 a.n. Pio Amedeo
                            </p>
                            <p className="text-sm md:text-base">
                            GoPay 085718053284 a.n. Shafira Maritza
                            </p>
                        </div>
                        <p className="text-sm md:text-base mb-5"> Pembayaran diberikan keterangan "Commitment Fee [Nama Lengkap]"</p>
                        <p className='text-sm md:text-base'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span> Required</p>
                        <p className='text-sm md:text-base'> Bukti Pembayaran <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span> </p>
                        <UploadButton
                        className="mt-3 flex items-start ut-button:bg-white ut-button:py-7 ut-button:rounded-xl ut-button:text-black/50 ut-button:w-[210px]"
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => handleImageUpload(res)}
                        onUploadError={(err) => console.error("Upload error:", err)} 
                        onClick={() => setIsUploading(true)}   
                        />
                        {fileName && (
                    <p className="mt-3 text-sm md:text-base text-white">File uploaded: {fileName}</p>
                    )}
                    </div>
                    <div className="flex justify-between">
                    <button onClick={handleBack} className="bg-gradient-to-b from-[#3E5399] to-[#9E77FB] text-white font-semibold py-5 px-12 rounded-full text-base md:text-lg mt-5 z-10">Back</button>
                    <button onClick={handleSubmit} disabled={!imageUrl || isUploading} className={`background-card-gradient text-white font-semibold py-5 px-12 rounded-full text-base md:text-lg mt-5 z-10 ${isUploading ? "opacity-50 cursor-not-allowed" : ""}  hover:background-page-gradient`}>
                            Submit
                    </button>
                    </div>
                </div>
            </>
        ):
        (
            <div className="text-2xl md:text-3xl font-bold [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] text-white"> Silahkan isi data terlebih dahulu! </div>
        )}
    </div>
    </section>
  );
};

export default UploadImagePage;
