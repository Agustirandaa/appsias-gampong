<?php

namespace App\Jobs;

use App\Mail\SendForgotPasswordEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendForgotPasswordEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $mailData;
    /**
     * Create a new job instance.
     */
    public function __construct($mailData)
    {
        $this->mailData = $mailData;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Mail::to($this->mailData['email'])
            ->send(new SendForgotPasswordEmail($this->mailData));
    }
}
