<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // // with invokable too, https://twitter.com/tony0x01/status/1036685376981794816
        // VerifyEmail::toMailUsing(function($notifiable){
        //     $verifyUrl = URL::temporarySignedRoute(
        //         'verification.verify', Carbon::now()->addMinutes(60), ['id' => $notifiable->gerKey()]
        //     );

        //     // it's okat to return a mailable?
        //     return (new MailMessage())
        //         ->subject('Your subject')
        //         ->line('Whatever you like')
        //         ->action('Verify it', $verifyUrl);

        // });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
