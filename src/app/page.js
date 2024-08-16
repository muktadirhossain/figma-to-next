import FooterMenu from "@/components/custom/FooterMenu";
import FormField from "@/components/custom/FormField";
import HeaderMenu from "@/components/HeaderMenu";
import MainHeading from "@/components/MainHeading";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

const links = [
  {
    id: 1,
    name: 'Tour',
    path: '/tour',
  },
  {
    id: 2,
    name: 'Prices',
    path: '/prices',
  },
  {
    id: 3,
    name: 'About',
    path: '/about',
  },
  {
    id: 4,
    name: 'Tour',
    path: '/tour',
  },
  {
    id: 5,
    name: 'Support',
    path: '/support',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeaderMenu links={links} />
      {/* Hero Area  */}
      <section>
        <MainHeading className="mt-[70px] mb-[40px]">Prior Authorization <br /> Lookup Tool</MainHeading>
        <p
          className="text-center text-[#151439] opacity-40 font-normal"
        >Use this form to determine if a service or item requires prior authorization from the <br /> health plan before you receive care.</p>

        <SectionHeading>Let&apos;s check and see if a prior <br /> authorization is required.</SectionHeading>
      </section>

      {/* form:: */}
      <section>
        <Card className="max-w-[787px] bg-white mx-auto px-[64px] py-[44px]">
          <CardContent>
            <FormField
              label="Insurance Company"
              helperText="Enter the Insurance Company Name"
              placeholder="Florida Blue"
            />
            <FormField
              label="Procedure Code"
              helperText="You can type the procedure code your doctor will use to bill for the planned service or item. You can also type part of the code&apos;s description to search, for example type &quot;tonsil&quot; to find &quot;Removal of tonsils.&quot; "

              placeholder="99241 - Office Consultation"
            />

            <div className="flex items-center gap-x-2">
              <PlusCircle size={24} className="text-action-secondary" />
              <p
                className="pointer text-action-secondary font-[600] text-base"
              >
                Add another Procedure Code</p>
            </div>
            <div className="flex justify-end mt-[30px]">
              <Button className="">Check</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-[150px] pt-[84px] pb-[54px]">
        <FooterMenu links={links} />
        <p
          className="text-center text-color-text font-medium text-base mt-[30px]"
        >© {new Date().getFullYear()} Designmodo. All rights reserved.</p>
      </footer>

    </main>
  );
}
