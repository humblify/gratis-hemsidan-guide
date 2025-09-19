import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from "react-router-dom";
import {
  Calculator,
  BarChart3,
  BookOpen,
  Layers,
  TrendingUp,
  Shield,
  Users,
  Phone,
  ChevronRight,
  ExternalLink
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

const AppSidebar = () => {
  const { t } = useTranslation();
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" : "hover:bg-muted/50";

  // Main navigation items
  const navigationItems = [
    {
      title: t('sidebar.platform.title'),
      items: [
        {
          title: t('sidebar.platform.overview'),
          url: "/platform",
          icon: Layers,
          description: "Complete platform overview"
        },
        {
          title: t('sidebar.platform.eroiLab'),
          url: "/platform/eroi-lab",
          icon: Calculator,
          description: "EROI calculation tool"
        },
        {
          title: t('sidebar.platform.analytics'),
          url: "/platform/analytics", 
          icon: BarChart3,
          description: "Advanced analytics dashboard"
        }
      ]
    },
    {
      title: t('sidebar.solutions.title'),
      items: [
        {
          title: t('sidebar.solutions.riskManagement'),
          url: "/solutions/risk-management",
          icon: Shield,
          description: "Predictive risk assessment"
        },
        {
          title: t('sidebar.solutions.esgIntegration'),
          url: "/solutions/esg-integration",
          icon: TrendingUp,
          description: "ESG & financial unification"
        },
        {
          title: t('sidebar.solutions.compliance'),
          url: "/solutions/compliance",
          icon: BookOpen,
          description: "CSRD & EU Taxonomy readiness"
        }
      ]
    },
    {
      title: t('sidebar.resources.title'),
      items: [
        {
          title: t('sidebar.resources.caseStudies'),
          url: "/resources/case-studies",
          icon: Users,
          description: "Industry case studies"
        },
        {
          title: t('sidebar.resources.documentation'),
          url: "/resources/docs",
          icon: BookOpen,
          description: "Technical documentation"
        }
      ]
    }
  ];

  const [expandedGroups, setExpandedGroups] = useState<string[]>(['platform']);

  const toggleGroup = (groupTitle: string) => {
    setExpandedGroups(prev => 
      prev.includes(groupTitle) 
        ? prev.filter(g => g !== groupTitle)
        : [...prev, groupTitle]
    );
  };

  return (
    <Sidebar className={`border-r ${isCollapsed ? "w-14" : "w-64"}`}>
      <SidebarContent>
        {navigationItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel 
              className="cursor-pointer flex items-center justify-between hover:bg-muted/50 px-2 py-1 rounded-md"
              onClick={() => !isCollapsed && toggleGroup(group.title)}
            >
              {!isCollapsed && (
                <>
                  <span>{group.title}</span>
                  <ChevronRight 
                    className={`h-4 w-4 transition-transform ${
                      expandedGroups.includes(group.title) ? 'rotate-90' : ''
                    }`}
                  />
                </>
              )}
            </SidebarGroupLabel>
            
            {(isCollapsed || expandedGroups.includes(group.title)) && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink 
                          to={item.url} 
                          className={getNavClass}
                          title={isCollapsed ? item.title : undefined}
                        >
                          <item.icon className="h-4 w-4" />
                          {!isCollapsed && (
                            <div className="flex-1 min-w-0">
                              <span className="block text-sm font-medium truncate">
                                {item.title}
                              </span>
                              <span className="block text-xs text-muted-foreground truncate">
                                {item.description}
                              </span>
                            </div>
                          )}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
        ))}

        {/* Main Pages */}
        <SidebarGroup>
          <SidebarGroupLabel>
            {!isCollapsed && t('sidebar.main')}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/about" className={getNavClass} title={isCollapsed ? t('nav.about') : undefined}>
                    <Users className="h-4 w-4" />
                    {!isCollapsed && <span>{t('nav.about')}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/contact" className={getNavClass} title={isCollapsed ? t('nav.contact') : undefined}>
                    <Phone className="h-4 w-4" />
                    {!isCollapsed && <span>{t('nav.contact')}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;