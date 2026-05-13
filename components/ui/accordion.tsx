"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Accordion({
  type = "single",
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  const accordionProps = {
    ...props,
    type,
    ...(type === "single" ? { collapsible: true } : {}),
  };

  // @ts-expect-error - Radix UI types are complex but this logic is correct
  return <AccordionPrimitive.Root {...accordionProps} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item className={cn(className)} {...props} />;
}

function AccordionTrigger({
  className,
  imageSrc,
  title,
  company,
  more,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  imageSrc: string;
  title: string;
  company: string;
  more?: string;
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium outline-none transition-all cursor-pointer",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-4">
          <Image
            src={imageSrc}
            width={44}
            height={44}
            alt="icon"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-base font-medium">{company}</span>
            <p className="text-xs font-normal text-muted-foreground">
              {title} {more && `- ${more}`}
            </p>
          </div>
        </div>

        <div className="h-11 w-11 flex items-center justify-center">
          <ChevronDownIcon className="text-muted-foreground size-4 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionTrigger2({
  className,
  imageSrc,
  title,
  company,
  more,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  imageSrc: string;
  title: string;
  company: string;
  more?: string;
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium outline-none transition-all cursor-pointer",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-4">
          <Image
            src={imageSrc}
            width={44}
            height={44}
            alt="icon"
            className="h-11 w-11 rounded-full object-contain bg-white p-1.5"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-base font-medium">{company}</span>
            <p className="text-xs font-normal text-muted-foreground">
              {title} {more && `- ${more}`}
            </p>
          </div>
        </div>

        <div className="h-11 w-11 flex items-center justify-center">
          <ChevronDownIcon className="text-muted-foreground size-4 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      asChild
      {...props}
    >
      <motion.div
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        initial="closed"
        animate="open"
        exit="closed"
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "overflow-hidden text-sm data-[state=closed]:hidden",
          className,
        )}
      >
        <div className="pt-0 pb-4">{children}</div>
      </motion.div>
    </AccordionPrimitive.Content>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionTrigger2,
  AccordionContent,
};
