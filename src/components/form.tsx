"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function RegForm() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const [step, setStep] = useState(1);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setScreenshot(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    if (!screenshot) {
      setError("Please upload the payment screenshot before submitting.");
      setLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      formDataToSend.append("screenshot", screenshot);

      console.log("📤 Submitting form data...");

      const response = await fetch("https://lok-me-ram-backend.vercel.app/api/submit-form", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("Form submitted successfully!");
        setFormData({ name: "", dob: "", phone: "", email: "", address: "", message: "" });
        setScreenshot(null);
        setFileName("");
        setStep(1);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setError("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reg-form" className="mx-auto px-4 py-10 flex justify-center items-center">
      <div className="w-full">
        <h2 className="text-3xl text-center md:text-5xl px-20 font-bold mb-2 md:mb-4">
          Join Our <span className="text-orange-600">Organization</span>
        </h2>
        {success && <p className="text-green-600 text-center">{success}</p>}
        {error && <p className="text-red-600 text-center">{error}</p>}

        {step === 1 && (
          <form onSubmit={(e) => e.preventDefault()} className="max-w-3xl mx-auto space-y-4 p-6 text-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date of Birth</label>
                <Input type="date" name="dob" value={formData.dob} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <Input name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here" />
            </div>
            <Button type="button" className="w-full bg-orange-500 hover:bg-orange-600" onClick={handleNext}>
              Next
            </Button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-4 p-6 text-2xl">
            <div className="text-center">
              <p className="text-lg font-medium mb-2">Scan to Pay</p>
              <Image src="/payment-qr.png" alt="Payment QR Code" width={300} height={300} className="mx-auto" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Upload Payment Screenshot</label>
              <Input type="file" accept="image/*" onChange={handleFileChange} />
              {fileName && <p className="text-sm text-gray-600 mt-1">Selected: {fileName}</p>}
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={loading || !screenshot}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
            <Button type="button" className="w-full bg-gray-500 hover:bg-gray-600 mt-2" onClick={() => setStep(1)}>
              Go Back
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
