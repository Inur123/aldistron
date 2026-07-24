import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LucideAngularModule, LayoutDashboard, Users, Package, ShoppingBag, Truck, FileText, Settings, ShieldCheck, ChevronRight, LogOut, Bell, Search, User, X, ChevronsUpDown } from 'lucide-angular';

// Spartan UI Imports
import { HlmSidebarImports, HlmSidebarService } from '@spartan-ng/helm/sidebar';
import { HlmBreadcrumbImports } from '@spartan-ng/helm/breadcrumb';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { AuthFacade } from '../../features/auth/facades/auth.facade';

interface NavSubItem {
  title: string;
  url: string;
}

interface NavGroup {
  title: string;
  icon: any;
  expanded?: boolean;
  items: NavSubItem[];
}

@Component({
  selector: 'app-main-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
    ...HlmSidebarImports,
    ...HlmBreadcrumbImports,
    ...HlmAvatarImports,
    ...HlmDropdownMenuImports,
    ...HlmButtonImports,
    ...HlmSeparatorImports,
  ],
  template: `
    <div hlmSidebarWrapper class="h-svh w-full overflow-hidden overscroll-none">
      <!-- Spartan Sidebar (Default Sidebar Layout) -->
      <hlm-sidebar collapsible="icon" variant="sidebar">
        <!-- Sidebar Header -->
        <div hlmSidebarHeader>
          <div class="flex items-center justify-between gap-2 px-2 py-1.5 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
            <div class="flex items-center gap-2 overflow-hidden">
              <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold shrink-0">
                A
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span class="truncate font-semibold">Aldistron</span>
                <span class="truncate text-xs text-muted-foreground">Enterprise Admin</span>
              </div>
            </div>

            <!-- Close Button for Mobile Drawer -->
            @if (sidebarService.isMobile()) {
              <button
                hlmBtn
                variant="ghost"
                size="icon"
                class="size-8 shrink-0 text-muted-foreground hover:text-foreground"
                (click)="onCloseMobileSidebar()"
              >
                <lucide-angular [img]="xIcon" class="size-4" />
              </button>
            }
          </div>
        </div>

        <!-- Sidebar Content -->
        <div hlmSidebarContent>
          <!-- Main Menu Section -->
          <div hlmSidebarGroup class="group-data-[collapsible=icon]:px-0">
            <div hlmSidebarGroupLabel>Navigation</div>
            <div hlmSidebarGroupContent>
              <ul hlmSidebarMenu class="group-data-[collapsible=icon]:items-center">
                <!-- Dashboard Single Link -->
                <li hlmSidebarMenuItem class="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
                  <a
                    hlmSidebarMenuButton
                    (click)="onMenuClick()"
                    routerLink="/dashboard"
                    routerLinkActive
                    #rlaDashboard="routerLinkActive"
                    [routerLinkActiveOptions]="{ exact: true }"
                    [isActive]="rlaDashboard.isActive"
                    class="group-data-[collapsible=icon]:justify-center"
                  >
                    <lucide-angular [img]="dashboardIcon" class="size-4 shrink-0" />
                    <span class="group-data-[collapsible=icon]:hidden">Dashboard</span>
                  </a>
                </li>

                <!-- Navigation Groups -->
                @for (group of navGroups(); track group.title) {
                  <li hlmSidebarMenuItem class="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
                    <button
                      hlmSidebarMenuButton
                      (click)="toggleGroup(group)"
                      [isActive]="isGroupActive(group)"
                      class="w-full justify-between group-data-[collapsible=icon]:justify-center"
                    >
                      <div class="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
                        <lucide-angular [img]="group.icon" class="size-4 shrink-0" />
                        <span class="group-data-[collapsible=icon]:hidden">{{ group.title }}</span>
                      </div>
                      <lucide-angular
                        [img]="chevronRightIcon"
                        class="size-4 transition-transform duration-200 group-data-[collapsible=icon]:hidden"
                        [class.rotate-90]="group.expanded"
                      />
                    </button>

                    @if (group.expanded) {
                      <ul hlmSidebarMenuSub class="group-data-[collapsible=icon]:hidden">
                        @for (sub of group.items; track sub.url) {
                          <li hlmSidebarMenuSubItem>
                            <a
                              hlmSidebarMenuSubButton
                              (click)="onSubItemClick()"
                              [routerLink]="sub.url"
                              [isActive]="isSubItemActive(sub.url)"
                            >
                              <span>{{ sub.title }}</span>
                            </a>
                          </li>
                        }
                      </ul>
                    }
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>

        <!-- Sidebar Footer (User Info with top border separator) -->
        <div hlmSidebarFooter class="border-t">
          <ul hlmSidebarMenu class="group-data-[collapsible=icon]:items-center">
            <li hlmSidebarMenuItem class="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
              <button
                hlmSidebarMenuButton
                [hlmDropdownMenuTrigger]="userMenu"
                (click)="onProfileClick()"
                class="w-full justify-start gap-2 cursor-pointer group-data-[collapsible=icon]:justify-center"
              >
                <hlm-avatar class="size-7 shrink-0">
                  <span hlmAvatarFallback class="bg-primary/10 text-primary font-medium text-xs">
                    {{ userInitial() }}
                  </span>
                </hlm-avatar>
                <div class="grid flex-1 text-left text-xs leading-tight group-data-[collapsible=icon]:hidden">
                  <span class="truncate font-semibold">{{ userName() }}</span>
                  <span class="truncate text-muted-foreground">{{ userEmail() }}</span>
                </div>
                <lucide-angular [img]="chevronsUpDownIcon" class="ml-auto size-4 shrink-0 text-muted-foreground group-data-[collapsible=icon]:hidden" />
              </button>
            </li>
          </ul>
        </div>

        <div hlmSidebarRail></div>
      </hlm-sidebar>

      <!-- User Dropdown Menu -->
      <ng-template #userMenu>
        <div hlmDropdownMenu [sideOffset]="4" class="w-[240px] min-w-full">
          <div hlmDropdownMenuLabel>
            <div class="flex flex-col space-y-1">
              <p class="text-sm font-medium leading-none">{{ userName() }}</p>
              <p class="text-xs leading-none text-muted-foreground">{{ userEmail() }}</p>
            </div>
          </div>
          <div hlmDropdownMenuSeparator></div>
          <button hlmDropdownMenuItem routerLink="/pengaturan" class="cursor-pointer">
            <lucide-angular [img]="settingsIcon" class="mr-2 size-4" />
            <span>Pengaturan</span>
          </button>
          <div hlmDropdownMenuSeparator></div>
          <button hlmDropdownMenuItem (click)="onLogout()" class="text-destructive focus:text-destructive cursor-pointer">
            <lucide-angular [img]="logoutIcon" class="mr-2 size-4" />
            <span>Log out</span>
          </button>
        </div>
      </ng-template>

      <!-- Main Content Canvas -->
      <main hlmSidebarInset class="flex flex-col h-svh w-full overflow-hidden overscroll-none">
        <!-- Fixed Header -->
        <header class="shrink-0 h-16 bg-background z-10 flex items-center justify-between gap-2 border-b px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 select-none">
          <div class="flex items-center gap-2">
            <button hlmSidebarTrigger></button>
          </div>

          <!-- Header Actions -->
          <div class="flex items-center gap-2">
            <button hlmBtn variant="ghost" size="icon" class="size-8">
              <lucide-angular [img]="bellIcon" class="size-4" />
            </button>
          </div>
        </header>

        <!-- Dynamic Content Body (Scrollable with thin scrollbar) -->
        <div class="flex-1 min-h-0 overflow-y-auto thin-scrollbar overscroll-contain p-4 md:p-6">
          <router-outlet />
        </div>
      </main>
    </div>
  `,
})
export class MainLayoutComponent {
  readonly dashboardIcon = LayoutDashboard;
  readonly usersIcon = Users;
  readonly packageIcon = Package;
  readonly shoppingBagIcon = ShoppingBag;
  readonly truckIcon = Truck;
  readonly fileTextIcon = FileText;
  readonly settingsIcon = Settings;
  readonly shieldIcon = ShieldCheck;
  readonly chevronRightIcon = ChevronRight;
  readonly logoutIcon = LogOut;
  readonly bellIcon = Bell;
  readonly searchIcon = Search;
  readonly userIcon = User;
  readonly xIcon = X;
  readonly chevronsUpDownIcon = ChevronsUpDown;

  navGroups = signal<NavGroup[]>([
    {
      title: 'User & System Admin',
      icon: Users,
      expanded: false,
      items: [
        { title: 'User Admin', url: '/useradmin' },
        { title: 'User Data', url: '/userdata' },
        { title: 'User Target', url: '/userdata-target' },
        { title: 'Verifikasi', url: '/verifikasi' },
        { title: 'Sysadmin', url: '/sysadmin' },
      ],
    },
    {
      title: 'Master Produk & Harga',
      icon: Package,
      expanded: false,
      items: [
        { title: 'Produk', url: '/products' },
        { title: 'Harga', url: '/harga-diskon' },
      ],
    },
    {
      title: 'Vendor & Pelanggan',
      icon: ShoppingBag,
      expanded: false,
      items: [
        { title: 'Daftar Vendor', url: '/vendors' },
        { title: 'Vendor Kategori', url: '/vendor-kategori' },
        { title: 'Daftar Pelanggan', url: '/pelanggan' },
        { title: 'Pelanggan Kategori', url: '/pelanggan-kategori' },
        { title: 'Pelanggan Poin', url: '/pelanggan-poin' },
      ],
    },
    {
      title: 'Operasional & Sales',
      icon: Truck,
      expanded: false,
      items: [
        { title: 'Pengiriman', url: '/pengiriman' },
        { title: 'Kunjungan Sales', url: '/kunjungan' },
        { title: 'Rute Kunjung', url: '/rute-kunjung' },
        { title: 'Armada', url: '/armada' },
        { title: 'Gudang', url: '/gudang' },
      ],
    },
    {
      title: 'Keuangan & Piutang',
      icon: FileText,
      expanded: false,
      items: [
        { title: 'Piutang Aktual', url: '/piutang-aktual' },
        { title: 'Piutang Plafon', url: '/piutang-plafon' },
        { title: 'Klaim Biaya', url: '/klaim-biaya' },
        { title: 'Plafon Biaya', url: '/plafon-biaya' },
      ],
    },
    {
      title: 'Pengaturan & System',
      icon: Settings,
      expanded: false,
      items: [
        { title: 'Pengaturan', url: '/pengaturan' },
        { title: 'Site Log', url: '/site-log' },
        { title: 'AOL Database', url: '/aol-databases' },
        { title: 'AOL Session', url: '/aol-session' },
      ],
    },
  ]);

  constructor(
    private authFacade: AuthFacade,
    private router: Router,
    public sidebarService: HlmSidebarService
  ) {}

  userName = signal('Admin User');
  userEmail = signal('admin@aldistron.com');
  userInitial = signal('A');

  onCloseMobileSidebar(): void {
    this.sidebarService.setOpenMobile(false);
  }

  onProfileClick(): void {
    if (this.sidebarService.state() === 'collapsed') {
      this.sidebarService.setOpen(true);
    }
  }

  onMenuClick(): void {
    if (this.sidebarService.isMobile()) {
      this.sidebarService.setOpenMobile(false);
    } else if (this.sidebarService.state() === 'collapsed') {
      this.sidebarService.setOpen(true);
    }
  }

  onSubItemClick(): void {
    if (this.sidebarService.isMobile()) {
      this.sidebarService.setOpenMobile(false);
    }
  }

  toggleGroup(targetGroup: NavGroup): void {
    if (this.sidebarService.isMobile()) {
      // In mobile, clicking accordion header expands/collapses group without closing sheet
    } else if (this.sidebarService.state() === 'collapsed') {
      this.sidebarService.setOpen(true);
    }
    this.navGroups.update((groups) =>
      groups.map((g) =>
        g.title === targetGroup.title ? { ...g, expanded: !g.expanded } : g
      )
    );
  }

  isGroupActive(group: NavGroup): boolean {
    return group.items.some((item) => this.isSubItemActive(item.url));
  }

  isSubItemActive(url: string): boolean {
    const currentUrl = this.router.url;
    if (url === '/products') {
      return (
        currentUrl.startsWith('/products') ||
        currentUrl.startsWith('/produk-brands') ||
        currentUrl.startsWith('/produk-kategori') ||
        currentUrl.startsWith('/produk-kompetitor')
      );
    }
    if (url === '/harga-diskon') {
      return (
        currentUrl.startsWith('/harga-diskon') ||
        currentUrl.startsWith('/harga-jual') ||
        currentUrl.startsWith('/harga-promo') ||
        currentUrl.startsWith('/harga-paket') ||
        currentUrl.startsWith('/harga-momen')
      );
    }
    return currentUrl.startsWith(url);
  }

  onLogout(): void {
    this.authFacade.logout();
    this.router.navigate(['/auth/login']);
  }
}
