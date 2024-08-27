"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { promise, z } from "zod";
import InputFeild from "../InputFeild";
import axios from "axios";
import { apiUrl } from "@/lib/data";

const schema = z.object({
  email: z.string().email({ message: "Inavild email addres !" }),
  // password: z
  //   .string()
  //   .min(8, { message: "Password must be at least 8 charectors long!" }),
  name: z.string().min(1, { message: "Name is required!" }),
  contactNo: z.string().min(1, { message: "Phone is required!" }),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  feeCoated: z
    .string()
    .optional()
    .transform((val) => Number(val)),
  leadStatus: z
    .enum(
      [
        "None",
        "NotContacted",
        "Attempted",
        "WarmLead",
        "Opportunity",
        "ColdLead",
      ],
      { message: "Lead status is required" }
    )
    .optional(),
  leadSource: z
    .enum(
      [
        "None",
        "WalkIn",
        "StudentReferral",
        "Demo",
        "WebSite",
        "WebsiteChat",
        "InboundCall",
        "GoogleAdWords",
        "FacebookAds",
        "GoogleMyBusiness",
        "WhatsApp",
      ],
      { message: "Lead source is required" }
    )
    .optional(),
  stack: z.enum(["None", "LifeSkills", "StudyAbroad", "HR"]).optional(),
  courses: z
    .enum(["None", "PublicSpeaking", "PTE"], { message: "courses is required" })
    .optional(),
  classMode: z
    .enum(
      [
        "None",
        "HYDClassRoom",
        "BLRClassRoom",
        "IndiaOnline",
        "InternationalOnline",
      ],
      { message: "Class mode is required" }
    )
    .optional(),
  batchTiming: z
    .enum(
      [
        "None",
        "SEVEN_AM_TO_EIGHT_AM",
        "EIGHT_AM_TO_NINE_AM",
        "NINE_AM_TO_TEN_AM",
        "TEN_AM_TO_ELEVEN_AM",
        "ELEVEN_AM_TO_TWELVE_PM",
        "TWELVE_PM_TO_ONE_PM",
        "ONE_PM_TO_TWO_PM",
        "TWO_PM_TO_THREE_PM",
        "THREE_PM_TO_FOUR_PM",
        "FOUR_PM_TO_FIVE_PM",
        "FIVE_PM_TO_SIX_PM",
        "SIX_PM_TO_SEVEN_PM",
        "SEVEN_PM_TO_EIGHT_PM",
        "EIGHT_PM_TO_NINE_PM",
      ],
      { message: "Batch timing is required" }
    )
    .optional(),
});

type Inputs = z.infer<typeof schema>;

const LeadForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const token = localStorage.getItem("token"); // Assuming you stored the token in localStorage

    try {
      const response = await fetch(
        "http://20.205.138.98:8081/api/leads/create-lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token here
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log("Lead created successfully:", result);
      } else {
        console.error(
          "Failed to create lead:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      setError("root", { message: "An Error occured" });
    }
  };

  return (
    <form
      action=""
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-xl font-semibold">Create a new Lead</h1>
      <span className="text-xs text-gray-400">Personal Information</span>
      <div className="flex flex-wrap gap-4 justify-between">
        <InputFeild
          label="Name"
          type="text"
          register={register}
          defaultValue={data?.name}
          name="name"
          error={errors.name}
        />
        <InputFeild
          label="Email"
          type="email"
          register={register}
          defaultValue={data?.email}
          name="email"
          error={errors.email}
        />
        <InputFeild
          label="Phone"
          type="text"
          register={register}
          defaultValue={data?.contactNo}
          name="contactNo"
          error={errors.contactNo}
        />
      </div>
      <span className="text-xs text-gray-400">Additional Information</span>

      <div className="flex flex-wrap gap-4 justify-between">
        <InputFeild
          label="feeCoated Quoted"
          type="number"
          register={register}
          defaultValue={data?.feeCoated}
          name="feeCoated"
          error={errors.feeCoated}
        />

        {/* Lead Status */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Lead Status</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("leadStatus")}
            defaultValue={data?.leadStatus}
          >
            <option value="None">None</option>
            <option value="NotContacted">Not Contacted</option>
            <option value="Attempted">Attempted</option>
            <option value="WarmLead">Warm Lead</option>
            <option value="ColdLead">Cold Lead</option>
          </select>
          {errors.leadStatus && (
            <p className="text-xs text-red-400">
              {" "}
              {errors.leadStatus.message}{" "}
            </p>
          )}
        </div>

        {/* Stack*/}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Stack</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("stack")}
            defaultValue={data?.stack}
          >
            <option value="None">Select Stack</option>
            <option value="LifeSkills">Life Skills</option>
            <option value="StudyAbroad">Study Abroad</option>
            <option value="HR">HR</option>
          </select>
          {errors.stack && (
            <p className="text-xs text-red-400"> {errors.stack.message} </p>
          )}
        </div>

        {/* Lead Source */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Lead Source</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("leadSource")}
            defaultValue={data?.leadSource}
          >
            <option value="None">None</option>
            <option value="WalkIn">Walk In</option>
            <option value="StudentRefferal">Student Refferal</option>
            <option value="Demo">Demo</option>
            <option value="Website">Website</option>
            <option value="InboundCall">Inbound Call</option>
            <option value="GoogleAdwords">Google Adwords</option>
          </select>
          {errors.leadSource && (
            <p className="text-xs text-red-400">{errors.leadSource.message}</p>
          )}
        </div>

        {/* Cource */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Course</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("courses")}
            defaultValue={data?.courses}
          >
            <option value="None">None</option>
            <option value="PublicSpeaking">Public Speaking</option>
            <option value="PTE">PTE</option>
          </select>
          {errors.courses && (
            <p className="text-xs text-red-400"> {errors.courses.message} </p>
          )}
        </div>

        {/* Class Mode */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Class Mode</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("classMode")}
            defaultValue={data?.classMode}
          >
            <option value="None">Select Class Mode</option>
            <option value="HYDClassRoom">HYD Classroom</option>
            <option value="BLRClassRoom">BLR Classroom</option>
            <option value="IndiaOnline">India Online</option>
            <option value="InternationalOnline">International Online</option>
          </select>
          {errors.classMode && (
            <p className="text-xs text-red-400"> {errors.classMode.message} </p>
          )}
        </div>

        {/* Batch Timing */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Batch Timing</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("batchTiming")}
            defaultValue={data?.batchTiming}
          >
            <option value="None">None</option>
            <option value="SEVEN_AM_TO_EIGHT_AM">7AM - 8AM</option>
            <option value="EIGHT_AM_TO_NINE_AM">8AM - 9AM</option>
            <option value="NINE_AM_TO_TEN_AM">9AM - 10AM</option>
            <option value="TEN_AM_TO_ELEVEN_AM">10AM - 11AM</option>
            <option value="ELEVEN_AM_TO_TWELVE_PM">11AM - 12PM</option>
            <option value="TWELVE_PM_TO_ONE_PM">12PM - 1PM</option>
            <option value="ONE_PM_TO_TWO_PM">1PM - 2PM</option>
            <option value="TWO_PM_TO_THREE_PM">2PM - 3PM</option>
            <option value="THREE_PM_TO_FOUR_PM">3PM - 4PM</option>
            <option value="FOUR_PM_TO_FIVE_PM">4PM - 5PM</option>
            <option value="FIVE_PM_TO_SIX_PM">5PM - 6PM</option>
            <option value="SIX_PM_TO_SEVEN_PM">6PM - 7PM</option>
            <option value="SEVEN_PM_TO_EIGHT_PM">7PM - 8PM</option>
            <option value="EIGHT_PM_TO_NINE_PM">8PM - 9PM</option>
          </select>
          {errors.batchTiming && (
            <p className="text-xs text-red-400">
              {" "}
              {errors.batchTiming.message}{" "}
            </p>
          )}
        </div>

        {/* Date */}
        <InputFeild
          label="Follow up Date"
          type="date"
          register={register}
          defaultValue={data?.date}
          name="date"
          error={errors.date}
        />

        {/* <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div> */}
      </div>

      <button
        className="bg-blue-400 text-white p-2 rounded-md hover:bg-blue-500"
        type="submit"
        disabled={isSubmitting}
      >
        {type === "create"
          ? "Create"
          : "Update" && isSubmitting
          ? "Loading..."
          : type}
      </button>
      {errors.root && (
        <p className="text-xs text-red-400"> {errors.root.message} </p>
      )}
    </form>
  );
};

export default LeadForm;
