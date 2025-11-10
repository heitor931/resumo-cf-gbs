"use client"

import * as React from "react"
import Link from "next/link"
import { TbMath } from "react-icons/tb";

//import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resumos</NavigationMenuTrigger>
          <NavigationMenuContent className="z-10">
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              
              <ListItem href="/summary/math" title="Matemática I">
                A Matemática é a linguagem do Universo!😍

              </ListItem>
              <ListItem href="/docs/installation" title="C.P.E">
                Falar bem em público é uma habilidade valiosa que pode abrir portas tanto na vida pessoal quanto profissional.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Inglês">
                A língua inglesa é uma ferramenta poderosa que conecta pessoas ao redor do mundo.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Introdução á Informática">
                A informática é a base da era digital em que vivemos hoje.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="M.I.C">
                A Metodologia de Investigação Científica (MIC) é um conjunto estruturado de procedimentos e técnicas utilizados para conduzir pesquisas científicas de maneira sistemática e rigorosa.
              </ListItem>
             
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/summary">Horário</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
       
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/summary">Eventos</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/summary">Quem somos</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
