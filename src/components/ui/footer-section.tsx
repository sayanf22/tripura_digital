'use client';

import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSectionData {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSectionData[] = [
	{
		label: 'Company',
		links: [
			{ title: 'Home', href: '/' },
			{ title: 'About Us', href: '/about' },
			{ title: 'Contact', href: '/contact' },
			{ title: 'Portfolio', href: '/portfolio' },
		],
	},
	{
		label: 'Services',
		links: [
			{ title: 'Website Development', href: '/services' },
			{ title: 'SEO & Marketing', href: '/services' },
			{ title: 'Social Media', href: '/services' },
			{ title: 'Brand Strategy', href: '/services' },
		],
	},
	{
		label: 'Legal',
		links: [
			{ title: 'Privacy Policy', href: '#' },
			{ title: 'Terms of Services', href: '#' },
			{ title: 'Refund Policy', href: '#' },
			{ title: 'Cookie Policy', href: '#' },
		],
	},
	{
		label: 'Social Links',
		links: [
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Youtube', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-[4rem] relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-3xl border-t border-border/10 bg-black text-white px-6 py-12 lg:py-16 overflow-hidden">
			<div className="bg-[#3b82f6]/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[2px]" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8 z-10">
				<AnimatedContainer className="space-y-4">
                    <div className="flex items-center gap-2 mb-6 h-12 relative w-64 hidden sm:flex">
                        <div className="absolute inset-0 pt-2">
                            <VaporizeTextCycle
                                texts={["Tripura Digital", "Technologies"]}
                                font={{ fontFamily: "Inter, sans-serif", fontSize: "28px", fontWeight: 900 }}
                                color="rgb(255, 255, 255)"
                                spread={3}
                                density={5}
                                animation={{ vaporizeDuration: 2.5, fadeInDuration: 1.5, waitDuration: 2 }}
                                direction="left-to-right"
                                alignment="left"
                                tag={Tag.H2}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-6 sm:hidden">
                        <FrameIcon className="size-8 text-[#3b82f6]" />
                        <div className="font-display font-black text-xl leading-none text-white">
                            TRIPURA
                            <span className="block text-[8px] text-white/60 uppercase tracking-[0.2em] font-bold mt-1">Digital Technologies</span>
                        </div>
                    </div>
					<p className="text-white/50 mt-8 text-sm tracking-wide md:mt-0 max-w-xs">
						© {new Date().getFullYear()} Tripura Digital Technologies. All rights reserved.
					</p>
				</AnimatedContainer>


				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">{section.label}</h3>
								<ul className="text-white/60 mt-5 space-y-3 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-white inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-2 size-4 text-[#3b82f6]" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-10px" }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
