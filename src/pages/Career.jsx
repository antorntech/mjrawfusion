import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <>
      <PageHeader title="Career" />
      <div className="px-5 md:px-0 py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="p-8 font-sans">
            <section className="mb-8">
              <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 uppercase text-[#162C40]">
                Your career at MJ Raw Fusion
              </h2>
              <p className="mb-4">
                MJ Raw Fusion is a fast-growing distribution company based in
                Dhaka, Bangladesh. As an employer, it is important to us to
                create a cosmopolitan, collegial, and productive working
                atmosphere. In addition to the global and diverse orientation,
                we also attach great importance to ensuring that every employee
                can contribute to the full extent at all times. The mutual
                exchange of ideas and their implementation enables constant
                innovation. Together with our employees, we pursue the goal of
                continuously improving and developing ourselves.
              </p>
              <p className="mb-6">
                Do you also want to become part of our team? Then find out more
                and apply now!
              </p>
              <button className="bg-green-500 hover:bg-green-600 transition-all duration-500 text-white px-6 py-2 rounded-md">
                Apply Now
              </button>
            </section>

            <section className="mb-8">
              <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 uppercase text-[#162C40]">
                Would you like a little taste?
              </h3>
              <p className="mb-4">
                Before you apply, we would like to give you a little insight
                into the unique world of MJ Raw Fusion and our dynamic team.
              </p>
              <p>
                Immerse yourself in our corporate culture and discover why we
                are proud to be your employer of choice.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 uppercase text-[#162C40]">
                A look behind the scenes
              </h3>

              <h4 className="text-lg font-semibold mb-2">Vacancies:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Trainee Executive, Full Time</strong>
                </li>
                <li>
                  <strong>Logistics Coordinator, Full Time</strong>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 uppercase text-[#162C40]">
                More Information
              </h3>
              <p className="mb-4">
                To correctly address your digital cover letter, please use the
                following contact details:
              </p>
              <p>
                <strong>MJ Raw Fusion</strong>
                <br />
                HUMAN RESOURCES
                <br />
                Ms. Sumaiya
                <br />
                158/1, Rayerbazar, Hazaribagh,
                <br />
                Dhaka-1209
              </p>
              <p className="mt-4">
                If you have any further questions about the application process,
                please use our email address{" "}
                <a
                  href="mailto:career@mjrf.com"
                  className="text-blue-500 hover:underline"
                >
                  career@mjrf.com
                </a>
                .
              </p>
              <p className="mt-2">
                Please note that only applications submitted digitally via our
                job portal will be considered.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
